
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="GetBankAccountResult" type="{http://ws.baroservice.com/}ArrayOfBankAccount" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "getBankAccountResult"
})
@XmlRootElement(name = "GetBankAccountResponse")
public class GetBankAccountResponse {

    @XmlElement(name = "GetBankAccountResult")
    protected ArrayOfBankAccount getBankAccountResult;

    /**
     * getBankAccountResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfBankAccount }
     *     
     */
    public ArrayOfBankAccount getGetBankAccountResult() {
        return getBankAccountResult;
    }

    /**
     * getBankAccountResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfBankAccount }
     *     
     */
    public void setGetBankAccountResult(ArrayOfBankAccount value) {
        this.getBankAccountResult = value;
    }

}
