
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
 *         &lt;element name="UpdateBrokerTaxInvoiceEXResult" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
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
    "updateBrokerTaxInvoiceEXResult"
})
@XmlRootElement(name = "UpdateBrokerTaxInvoiceEXResponse")
public class UpdateBrokerTaxInvoiceEXResponse {

    @XmlElement(name = "UpdateBrokerTaxInvoiceEXResult")
    protected int updateBrokerTaxInvoiceEXResult;

    /**
     * updateBrokerTaxInvoiceEXResult �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getUpdateBrokerTaxInvoiceEXResult() {
        return updateBrokerTaxInvoiceEXResult;
    }

    /**
     * updateBrokerTaxInvoiceEXResult �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setUpdateBrokerTaxInvoiceEXResult(int value) {
        this.updateBrokerTaxInvoiceEXResult = value;
    }

}
