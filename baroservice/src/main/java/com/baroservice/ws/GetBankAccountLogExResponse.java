
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
 *         &lt;element name="GetBankAccountLogExResult" type="{http://ws.baroservice.com/}PagedBankAccountLogEx" minOccurs="0"/&gt;
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
    "getBankAccountLogExResult"
})
@XmlRootElement(name = "GetBankAccountLogExResponse")
public class GetBankAccountLogExResponse {

    @XmlElement(name = "GetBankAccountLogExResult")
    protected PagedBankAccountLogEx getBankAccountLogExResult;

    /**
     * getBankAccountLogExResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link PagedBankAccountLogEx }
     *     
     */
    public PagedBankAccountLogEx getGetBankAccountLogExResult() {
        return getBankAccountLogExResult;
    }

    /**
     * getBankAccountLogExResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link PagedBankAccountLogEx }
     *     
     */
    public void setGetBankAccountLogExResult(PagedBankAccountLogEx value) {
        this.getBankAccountLogExResult = value;
    }

}
