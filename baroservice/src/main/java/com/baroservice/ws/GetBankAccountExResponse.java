
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
 *         &lt;element name="GetBankAccountExResult" type="{http://ws.baroservice.com/}ArrayOfBankAccount" minOccurs="0"/&gt;
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
    "getBankAccountExResult"
})
@XmlRootElement(name = "GetBankAccountExResponse")
public class GetBankAccountExResponse {

    @XmlElement(name = "GetBankAccountExResult")
    protected ArrayOfBankAccount getBankAccountExResult;

    /**
     * getBankAccountExResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfBankAccount }
     *     
     */
    public ArrayOfBankAccount getGetBankAccountExResult() {
        return getBankAccountExResult;
    }

    /**
     * getBankAccountExResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfBankAccount }
     *     
     */
    public void setGetBankAccountExResult(ArrayOfBankAccount value) {
        this.getBankAccountExResult = value;
    }

}
